import { Client } from '@notionhq/client';
import { PartialPageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { env } from "~/env.mjs";
import { Task, emptyTask } from '~/utils/constants';


const notion = new Client({ auth: process.env.NOTION_API_KEY });

interface Page extends PartialPageObjectResponse {
  properties: Record<string, any>;
}


export async function fetchTopPriorityTask(): Promise<Task> {
  const response = await notion.databases.query({
    database_id: env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Priority',
          select: { equals: 'TOP' }
        },
        {
          property: 'Status',
          status: { does_not_equal: 'Done' }
        }
      ]
    }
  });
  if (!response.results.length || !response.results[0]) return emptyTask;
  const pageId = response.results[0].id;
  if (!pageId) return emptyTask;
  const page = await notion.pages.retrieve({ page_id: pageId }) as Page;
  const taskTitle = page.properties['Task Name'].title[0].plain_text;
  const dueDate = page.properties['Due Date'].date.start;
  return { id: pageId, title: taskTitle, dueDate };
}

export async function completeTask(id: string) {
  const response = await notion.pages.update({
    page_id: id,
    properties: {
      'Status': { status: { name: 'Done' } }
    }
  });
}
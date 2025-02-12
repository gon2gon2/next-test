'use server'

import { writeFile, appendFile } from 'fs/promises';
import { existsSync } from 'fs';
import { revalidatePath } from 'next/cache';
import path from 'path';

// 파일 경로 설정
const filePath = path.join(process.cwd(), 'public/todo.txt');

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!title || !content) {
    throw new Error('Title and Content are required!');
  }

  // 저장할 텍스트 포맷
  const newEntry = `- ${title}: ${content}\n`;

  try {
    // 파일이 존재하는지 확인하고, 없으면 새로 생성
    if (!existsSync(filePath)) {
      await writeFile(filePath, newEntry, 'utf-8'); // 새 파일 생성
    } else {
      await appendFile(filePath, newEntry, 'utf-8'); // 기존 파일에 추가
    }

    // ✅ 페이지 데이터 갱신
    revalidatePath('/todos');

    return { success: true, message: 'Todo added successfully!' };
  } catch (error) {
    console.error('Failed to write to todo.txt:', error);
    return { success: false, message: 'Failed to add todo.' };
  }
}
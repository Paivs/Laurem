// app/articles/editor/page.tsx
import MarkdownEditor from '@/components/MarkdownEditor';

export default function EditorPage() {
  return (
    <div className="container mx-auto p-4 pt-32">
      <h1 className="text-2xl font-bold mb-4">Editor de Artigos</h1>
      <MarkdownEditor />
    </div>
  );
}
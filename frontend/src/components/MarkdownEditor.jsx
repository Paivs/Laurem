"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Loader2, Plus, X } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";
import ReactMarkdown from "react-markdown";
import slugify from "slugify";
import { toast } from "sonner";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const articleSchema = z.object({
  title: z.string().min(5, "Mínimo 5 caracteres"),
  description: z.string().min(10, "Mínimo 10 caracteres"),
  author: z.string().min(3),
  content: z.string().min(100, "Conteúdo muito curto"),
  tags: z.array(z.string().min(2)).min(1, "Adicione pelo menos 1 tag"),
  imgLink: z.string().min(1, "Link da imagem obrigatoria"),
  category: z.string().min(1, "Selecione uma categoria"),
  date: z.date().optional(),
});

export default function ArticleEditor({ initialData = {} }) {
  const [tags, setTags] = useState(initialData.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      ...initialData,
      date: initialData.createdAt
        ? new Date(initialData.createdAt)
        : new Date(),
    },
  });

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      const newTags = [...tags, tagInput];
      setTags(newTags);
      setValue("tags", newTags);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    setValue("tags", newTags);
  };

  const onSubmit = async (data) => {
    setIsSaving(true);
    try {
      const slug = slugify(data.title, { lower: true, strict: true });

      const payload = {
        ...data,
        slug,
        tags,
        imgLink: data.imgLink,
        category: data.category,
        createdAt: data.date || new Date(),
      };


      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status == 201 && response.ok) {
        reset({
          title: "",
          description: "",
          author: "",
          content: "",
          category: "",
          date: new Date(),
          imgLink: "",
        });
        toast.success("Artigo salvo");
      } else {
        toast.error("Erro ao salvar o artigo");
      }
      // Redirecionar ou mostrar sucesso
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        {/* Coluna Esquerda - Metadados */}
        <div className="space-y-4">
          <div>
            <Label className={"mb-2"} htmlFor="title">
              Título*
            </Label>
            <Input
              id="title"
              {...register("title")}
              placeholder="Título do artigo"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div>
            <Label className={"mb-2"} htmlFor="description">
              Descrição*
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Breve descrição para SEO"
              rows={3}
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <Label className={"mb-2"} htmlFor="author">
              Autor*
            </Label>
            <Input
              id="author"
              {...register("author")}
              placeholder="Nome do autor"
            />
            {errors.author && (
              <p className="text-sm text-red-500">{errors.author.message}</p>
            )}
          </div>
          <div>
            <Label className={"mb-2"} htmlFor="author">
              Link image
            </Label>
            <Input
              id="imgLink"
              {...register("imgLink")}
              placeholder="Insira o link da imagem aqui"
            />
            {errors.author && (
              <p className="text-sm text-red-500">{errors.imgLink.message}</p>
            )}
          </div>
          <div>
            <Label className={"mb-2"}>Data de Publicação</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {watch("date") ? (
                    format(watch("date"), "PPP", { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={watch("date")}
                  onSelect={(date) => setValue("date", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>{" "}
          <div>
            <Label className={"mb-2"}>Categoria*</Label>{" "}
            <Select
              onValueChange={(value) => setValue("category", value)}
              defaultValue={initialData.category}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Soberania Digital">Soberania Digital</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Gestão">Gestão</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
          <div>
            <Label className={"mb-2"}>Tags</Label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Adicionar tag"
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTag())
                }
              />
              <Button type="button" size="icon" onClick={addTag}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm"
                >
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
            {errors.tags && (
              <p className="text-sm text-red-500">{errors.tags.message}</p>
            )}
          </div>
        </div>

        {/* Coluna Direita - Conteúdo */}
        <div className="flex flex-row gap-4 justify-center mt-8">
          <div className="grow">
            <Label className={"mb-2"} htmlFor="content">
              Conteúdo (Markdown)*
            </Label>
            <Textarea
              id="content"
              {...register("content")}
              placeholder="Escreva seu conteúdo em Markdown..."
              rows={15}
              className="font-mono text-sm"
            />
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>

          <div className="grow rounded-md border p-4">
            <h3 className="mb-2 text-sm font-medium">Preview</h3>
            <div className="prose max-w-none">
              <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              >
                {watch("content") || "*Nada para pré-visualizar*"}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSaving}>
        {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {isSaving ? "Salvando..." : "Publicar Artigo"}
      </Button>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { EyeIcon, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EventosAdminPage() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const limit = 10;
  const router = useRouter();

  useEffect(() => {
    async function fetchEventos() {
      setLoading(true);
      try {
        const response = await api.get(`events?page=${page}&limit=${limit}`);
        setEventos(response.data);
        setTotal(response.total);
      } catch (err) {
        toast.error("Erro ao carregar eventos");
      } finally {
        setLoading(false);
      }
    }
    fetchEventos();
  }, [page]);

  const openDialog = (evento) => {
    setSelectedEvento(evento);
    setDialogOpen(true);
  };

  const deleteEvento = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este evento?"
    );
    if (!confirmDelete) return;

    try {
      const res = await api.del(`/events/${id}`);
      if (!res.error) {
        toast.success("Evento excluído com sucesso");
        setEventos((prev) => prev.filter((e) => e._id !== id));
      } else {
        toast.error("Erro ao excluir evento");
      }
    } catch {
      toast.error("Erro ao excluir evento");
    }
  };

  return (
    <div className="pt-32">
      <Card className="w-full max-w-7xl px-4 mx-auto mt-10">
        <CardHeader>
          <CardTitle>Eventos Agendados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell colSpan={5}>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                      </TableRow>
                    ))
                  : eventos.map((evento) => (
                      <TableRow key={evento._id}>
                        <TableCell>{evento.nomeCompleto}</TableCell>
                        <TableCell>{evento.servico}</TableCell>
                        <TableCell>{evento.data}</TableCell>
                        <TableCell>{evento.horario}</TableCell>
                        <TableCell className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openDialog(evento)}
                          >
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              router.push(`/admin/eventos/${evento._id}/editar`)
                            }
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteEvento(evento._id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>

          {/* Paginação */}
          <div className="flex justify-between items-center mt-4">
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Anterior
            </Button>
            <span>
              Página {page} de {Math.ceil(total / limit)}
            </span>
            <Button
              disabled={page * limit >= total}
              onClick={() => setPage(page + 1)}
            >
              Próxima
            </Button>
          </div>

          {/* Modal de Detalhes */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Detalhes do Evento</DialogTitle>
                <DialogDescription>
                  Veja as informações da requiição
                </DialogDescription>
              </DialogHeader>

              {selectedEvento ? (
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-bold">Nome:</span>{" "}
                    {selectedEvento.nomeCompleto}
                  </li>
                  <li>
                    <span className="font-bold">Serviço:</span>{" "}
                    {selectedEvento.servico}
                  </li>
                  <li>
                    <span className="font-bold">Empresa:</span>{" "}
                    {selectedEvento.empresa || "—"}
                  </li>
                  <li>
                    <span className="font-bold">Email:</span>{" "}
                    {selectedEvento.email}
                  </li>
                  <li>
                    <span className="font-bold">Telefone:</span>{" "}
                    {selectedEvento.telefone}
                  </li>
                  <li>
                    <span className="font-bold">Data:</span>{" "}
                    {selectedEvento.data}
                  </li>
                  <li>
                    <span className="font-bold">Horário:</span>{" "}
                    {selectedEvento.horario}
                  </li>
                  <li>
                    <span className="font-bold">Participantes:</span>{" "}
                    {selectedEvento.participantes}
                  </li>
                  <li>
                    <span className="font-bold">Mensagem:</span>{" "}
                    {selectedEvento.mensagem}
                  </li>
                  <li>
                    <span className="font-bold">Termos:</span>{" "}
                    {selectedEvento.termos ? "Aceito" : "Não aceito"}
                  </li>
                  <li>
                    <span className="font-bold">Enviado em:</span>{" "}
                    {new Date(selectedEvento.createdAt).toLocaleString()}
                  </li>
                </ul>
              ) : (
                <p>Nenhum evento selecionado.</p>
              )}

              <DialogFooter>
                <Button onClick={() => setDialogOpen(false)}>Fechar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}

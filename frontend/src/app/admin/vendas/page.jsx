"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Trash2 } from "lucide-react";
import { api } from "@/lib/api";

export default function AdminSalesPage() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSale, setSelectedSale] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  async function fetchSales(pageNumber = 1) {
    setLoading(true);
    try {
      const response = await api.get(`sales?page=${pageNumber}&limit=${limit}`);
      if (!response.error) {
        setSales(response.data);
        setTotalPages(response.pagination.totalPages);
        setPage(response.pagination.page);
      } else {
        console.error("Erro ao carregar vendas:", response.message);
      }
    } catch (error) {
      console.error("Erro ao carregar vendas:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSales(page);
  }, [page]);

  function openModal(sale) {
    setSelectedSale(sale);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedSale(null);
  }

  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir este orçamento?")) return;
    setDeletingId(id);
    try {
      const response = await api.del(`sales/${id}`);
      if (!response.error) {
        setSales((prev) => prev.filter((sale) => sale._id !== id));
      } else {
        alert("Erro ao excluir orçamento: " + response.message);
      }
    } catch (error) {
      alert("Erro ao excluir orçamento");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="pt-32">
      <Card className="max-w-7xl mx-auto px-4 mt-10">
        <CardHeader>
          <CardTitle>Orçamentos Recebidos</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Carregando...</p>
          ) : sales.length === 0 ? (
            <p className="text-muted-foreground">
              Nenhum orçamento encontrado.
            </p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Assunto</TableHead>
                    <TableHead className="w-32 text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sales.map((sale) => (
                    <TableRow key={sale._id}>
                      <TableCell>{sale.name}</TableCell>
                      <TableCell>{sale.email}</TableCell>
                      <TableCell>{sale.subject}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          title="Ver detalhes"
                          onClick={() => openModal(sale)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          title="Excluir"
                          onClick={() => handleDelete(sale._id)}
                          disabled={deletingId === sale._id}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Paginação simples */}
              <div className="mt-4 flex justify-center space-x-4">
                <Button
                  variant="outline"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                >
                  Anterior
                </Button>
                <span className="flex items-center px-2">
                  Página {page} de {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                >
                  Próxima
                </Button>
              </div>
            </>
          )}

          {/* Modal de detalhes */}
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Detalhes do Orçamento</DialogTitle>
                <DialogDescription>
                  {selectedSale ? (
                    <div className="space-y-3">
                      <p>
                        <strong>Nome:</strong> {selectedSale.name}
                      </p>
                      {selectedSale.company && (
                        <p>
                          <strong>Empresa:</strong> {selectedSale.company}
                        </p>
                      )}
                      <p>
                        <strong>Email:</strong> {selectedSale.email}
                      </p>
                      <p>
                        <strong>Telefone:</strong> {selectedSale.phone}
                      </p>
                      <p>
                        <strong>Assunto:</strong> {selectedSale.subject}
                      </p>
                      <p>
                        <strong>Mensagem:</strong> {selectedSale.message}
                      </p>
                      <p>
                        <strong>Recebeu comunicações:</strong>{" "}
                        {selectedSale.terms ? "Sim" : "Não"}
                      </p>
                      <p>
                        <strong>Enviado em:</strong>{" "}
                        {new Date(selectedSale.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ) : (
                    <p>Nenhum detalhe para exibir.</p>
                  )}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={closeModal}>Fechar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}

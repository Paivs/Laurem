"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Mail, Trash2, X } from "lucide-react";
import { api } from "@/lib/api";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [totalPages, setTotalPages] = useState(1);

  // Estado para modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    api.get(`contact?page=${page}&limit=${limit}`)
      .then((res) => {
        if (!res || res.error) {
          setContacts([]);
          setTotalPages(1);
          setLoading(false);
          return;
        }
        setContacts(res.data);
        setTotalPages(res.pagination?.totalPages || 1);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar contatos:", err);
        setContacts([]);
        setTotalPages(1);
        setLoading(false);
      });
  }, [page]);

  const handleDelete = (id) => {
    if (!confirm("Tem certeza que deseja excluir este contato?")) return;
    api.del(`contact/${id}`)
      .then(() => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
      })
      .catch((err) => {
        console.error("Erro ao excluir contato:", err);
      });
  };

  // Abre modal com mensagem selecionada
  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
  };

  // Fecha modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedMessage("");
  };

  return (
    <div className="pt-32">
      <Card className="max-w-7xl mx-auto px-4 mt-10">
        <CardHeader>
          <CardTitle>Contatos Recebidos</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Carregando...</p>
          ) : contacts.length === 0 ? (
            <p className="text-muted-foreground">Nenhum contato encontrado.</p>
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
                  {contacts.map((contact, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.subject}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          title="Ver mensagem"
                          onClick={() => handleViewMessage(contact.message || "Sem mensagem")}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" title="Responder por e-mail">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          title="Excluir"
                          onClick={() => handleDelete(contact.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Paginação */}
              <div className="mt-4 flex justify-between items-center">
                <Button disabled={page === 1} onClick={() => setPage((p) => Math.max(p - 1, 1))}>
                  Anterior
                </Button>
                <span>
                  Página {page} de {totalPages}
                </span>
                <Button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(p + 1, totalPages))}>
                  Próximo
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Mensagem</h2>
            <p className="whitespace-pre-wrap">{selectedMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

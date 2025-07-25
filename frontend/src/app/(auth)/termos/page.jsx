"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6  pt-32">
      <Tabs defaultValue="terms">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="terms">Termos e Condições</TabsTrigger>
          <TabsTrigger value="privacy">Política de Privacidade</TabsTrigger>
        </TabsList>

        <TabsContent value="terms">
          <Card>
            <CardHeader>
              <CardTitle>Termos e Condições de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Ao acessar ou utilizar o site da Laurem, você concorda com os presentes Termos e Condições de Uso.
                Caso não concorde com algum dos termos, recomendamos que não utilize o site.
              </p>

              <h4 className="font-semibold text-base">1. Objetivo</h4>
              <p>
                O site da Laurem tem como finalidade fornecer informações sobre nossos serviços, produtos, artigos
                tecnológicos, projetos públicos e gratuitos, além de oferecer canais de contato com a equipe comercial
                e técnica.
              </p>

              <h4 className="font-semibold text-base">2. Responsabilidades do Usuário</h4>
              <p>
                O usuário compromete-se a utilizar o site apenas para fins lícitos e em conformidade com as leis
                brasileiras. É vedado qualquer uso que possa comprometer a segurança, integridade ou disponibilidade
                da plataforma.
              </p>

              <h4 className="font-semibold text-base">3. Conteúdo</h4>
              <p>
                Todo o conteúdo publicado, incluindo artigos, textos, imagens e marca Laurem, é protegido por direitos
                autorais. É proibida a reprodução sem autorização.
              </p>

              <h4 className="font-semibold text-base">4. Modificações</h4>
              <p>
                Os Termos podem ser atualizados periodicamente, sendo responsabilidade do usuário consultá-los
                regularmente.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Política de Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                A Laurem respeita sua privacidade. Esta política descreve como coletamos, utilizamos, armazenamos e
                protegemos os dados fornecidos pelos usuários ao utilizar nosso site.
              </p>

              <h4 className="font-semibold text-base">1. Coleta de Dados</h4>
              <p>
                Coletamos informações como nome, e-mail, telefone e mensagens fornecidas nos formulários de contato.
                Esses dados são utilizados apenas para indexar as requisições e responder adequadamente às solicitações
                feitas.
              </p>

              <h4 className="font-semibold text-base">2. Uso das Informações</h4>
              <p>
                Os dados são utilizados exclusivamente para: atendimento ao cliente, resposta a dúvidas e propostas
                comerciais, e melhoria dos serviços prestados. Não realizamos compartilhamento com terceiros.
              </p>

              <h4 className="font-semibold text-base">3. Cookies</h4>
              <p>
                Utilizamos cookies apenas para melhorar a experiência de navegação. O usuário pode gerenciar os cookies
                nas configurações de seu navegador.
              </p>

              <h4 className="font-semibold text-base">4. Segurança</h4>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra perda, roubo ou
                uso não autorizado.
              </p>

              <h4 className="font-semibold text-base">5. Consentimento</h4>
              <p>
                Ao fornecer seus dados no site, o usuário declara estar ciente e concordar com esta Política de
                Privacidade.
              </p>

              <h4 className="font-semibold text-base">6. Direitos do Titular</h4>
              <p>
                Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento, entrando em contato
                conosco.
              </p>

              <h4 className="font-semibold text-base">7. Alterações</h4>
              <p>
                Esta política poderá ser atualizada. A data da última modificação será indicada no final do documento.
              </p>

              <hr className="my-4" />

              <p className="text-xs text-muted-foreground">
                Última atualização: 25 de julho de 2025
              </p>

              <p className="text-xs text-muted-foreground">
                Em caso de dúvidas, entre em contato através do e-mail{" "}
                <a href="mailto:gustavo.paiva.gp1@gmail.com" className="underline">
                  gustavo.paiva.gp1@gmail.com
                </a>{" "}
                ou telefone <strong>+55 11 98069-7346</strong>.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

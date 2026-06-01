import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";

const APPS_SCRIPT_URL = ""; // Cole aqui a URL do seu Web App do Apps Script

export function VisitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    localidade: "",
    tipoVisitante: "",
    dataVisita: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-soft)]">
        <CheckCircle2 className="mx-auto h-16 w-16 text-accent" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-primary">
          Solicitação enviada com sucesso!
        </h3>
        <p className="mt-3 text-muted-foreground">
          A equipe responsável analisará os dados e entrará em contato para
          confirmação.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setForm({
              nome: "",
              email: "",
              telefone: "",
              localidade: "",
              tipoVisitante: "",
              dataVisita: "",
            });
          }}
        >
          Enviar nova solicitação
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-2">
        <Label htmlFor="nome">Nome completo</Label>
        <Input
          id="nome"
          required
          value={form.nome}
          onChange={(e) => update("nome", e.target.value)}
          placeholder="Seu nome completo"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="voce@email.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="telefone">Número de telefone</Label>
          <Input
            id="telefone"
            required
            value={form.telefone}
            onChange={(e) => update("telefone", e.target.value)}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="localidade">Localidade</Label>
          <Input
            id="localidade"
            required
            value={form.localidade}
            onChange={(e) => update("localidade", e.target.value)}
            placeholder="Cidade / Estado"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tipoVisitante">Tipo de visitante</Label>
          <Select
            value={form.tipoVisitante}
            onValueChange={(v) => update("tipoVisitante", v)}
            required
          >
            <SelectTrigger id="tipoVisitante">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Estudante">Estudante</SelectItem>
              <SelectItem value="Professor">Professor</SelectItem>
              <SelectItem value="Profissional">Profissional</SelectItem>
              <SelectItem value="Instituição">Instituição</SelectItem>
              <SelectItem value="Visitante geral">Visitante geral</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dataVisita">Data desejada para visita</Label>
        <Input
          id="dataVisita"
          type="date"
          required
          value={form.dataVisita}
          onChange={(e) => update("dataVisita", e.target.value)}
        />
      </div>
      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={loading}
        className="mt-2"
      >
        <Send className="h-4 w-4" aria-hidden />
        {loading ? "Enviando..." : "Enviar solicitação"}
      </Button>
    </form>
  );
}

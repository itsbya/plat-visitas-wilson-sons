// ============================================================
// Google Apps Script — Integração com Google Sheets
// ============================================================
// Como usar:
// 1. Crie uma planilha no Google Sheets com uma aba chamada "Agendamentos"
// 2. Cabeçalhos da linha 1 (nesta ordem):
//    Data de envio | Nome | E-mail | Número de telefone |
//    Localidade | Tipo de visitante | Data da visita | Status
// 3. Menu Extensões > Apps Script > cole este código
// 4. Implantar > Nova implantação > Tipo: App da Web
//    - Executar como: Eu
//    - Quem tem acesso: Qualquer pessoa
// 5. Copie a URL gerada e cole em APPS_SCRIPT_URL em
//    src/components/VisitForm.tsx
// ============================================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName("Agendamentos");

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nome,
      data.email,
      data.telefone,
      data.localidade,
      data.tipoVisitante,
      data.dataVisita,
      "Pendente"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Solicitação enviada com sucesso!"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

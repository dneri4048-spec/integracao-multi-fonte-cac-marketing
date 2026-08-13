db.leads.deleteMany({}) // limpa os leads antigos antes de gerar os novos

db.leads.insertMany(
  Array.from({length: 30000}, (_, i) => {
    const canais = ["Google Ads", "Facebook", "Email", "Instagram", "YouTube", "Website"];
    const status = ["novo", "qualificado", "convertido"];
    const canal = canais[Math.floor(Math.random() * canais.length)];
    const stat = status[Math.floor(Math.random() * status.length)];
    const dia = Math.floor(Math.random() * 28) + 1;
    const mes = Math.floor(Math.random() * 12) + 1;
    return {
      nome: "Lead " + (i + 1),
      canal_origem: canal,
      status: stat,
      dataCaptura: `2021-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`
    };
  })
)
import { useEffect, useState } from "react";

export default function PainelRotas() {
  const [agora, setAgora] = useState(new Date());

  const [setorSelecionado, setSetorSelecionado] =
    useState("SEPARACAO");

  const setores = {
    SEPARACAO: [
    { numero: "788/789", nome: "BARREIRAS//IBOTIRAMA", limite: "18:30", entregue:false, horarioEntrega:null, },
    { numero: "039", nome: "TEIXEIRA DE FREITAS", limite: "20:00", entregue:false, horarioEntrega:null, },
    { numero: "030/086/787", nome: "GUANAMBI//BRUMADO//SEABRA", limite: "21:30", entregue:false, horarioEntrega:null, },
    { numero: "035/037", nome: "VDC//POÇÕES", limite: "22:30", entregue:false, horarioEntrega:null, },
    { numero: "043/049", nome: "ITABUNA//GANDU", limite: "23:20", entregue:false, horarioEntrega:null, },
    { numero: "771/786", nome: "SR.BOMFIM//JUAZEIRO", limite: "23:40", entregue:false, horarioEntrega:null, },
    { numero: "064/066", nome: "SERGIPE", limite: "00:30", entregue:false, horarioEntrega:null, },
    { numero: "784/791/778", nome: "IRECÊ//JACOBINA//JEQUIÉ", limite: "01:00", entregue:false, horarioEntrega:null, },
    { numero: "792", nome: "FPP", limite: "01:30", entregue:false, horarioEntrega:null, },
    { numero: "793/007", nome: "ITABERABA//RIBEIRA DO POMBAL", limite: "02:00", entregue:false, horarioEntrega:null, },
    { numero: "765", nome: "SANTO ANTÔNIO", limite: "03:10", entregue:false, horarioEntrega:null, },
    { numero: "038/033", nome: "FEIRA DE SANTANA", limite: "04:00", entregue:false, horarioEntrega:null, },
    { numero: "770/767", nome: "SERRINHA//ALAGOINHAS", limite: "04:20", entregue:false, horarioEntrega:null, },
    { numero: "034", nome: "SALVADOR REGIÃO MTP", limite: "06:50", entregue:false, horarioEntrega:null, },
  ],

    CONFERENCIA: [
    { numero: "788/789", nome: "BARREIRAS//IBOTIRAMA", limite: "18:50", entregue:false, horarioEntrega:null, },
    { numero: "039", nome: "TEIXEIRA DE FREITAS", limite: "20:20", entregue:false, horarioEntrega:null, },
    { numero: "030/086/787", nome: "GUANAMBI//BRUMADO//SEABRA", limite: "21:50", entregue:false, horarioEntrega:null, },
    { numero: "035/037", nome: "VDC//POÇÕES", limite: "22:50", entregue:false, horarioEntrega:null, },
    { numero: "043/049", nome: "ITABUNA//GANDU", limite: "23:40", entregue:false, horarioEntrega:null, },
    { numero: "771/786", nome: "SR.BOMFIM//JUAZEIRO", limite: "00:00", entregue:false, horarioEntrega:null, },
    { numero: "064/066", nome: "SERGIPE", limite: "00:50", entregue:false, horarioEntrega:null, },
    { numero: "784/791/778", nome: "IRECÊ//JACOBINA//JEQUIÉ", limite: "01:20", entregue:false, horarioEntrega:null, },
    { numero: "792", nome: "FPP", limite: "01:50", entregue:false, horarioEntrega:null, },
    { numero: "793/007", nome: "ITABERABA//RIBEIRA DO POMBAL", limite: "02:20", entregue:false, horarioEntrega:null, },
    { numero: "765", nome: "SANTO ANTÔNIO", limite: "03:30", entregue:false, horarioEntrega:null, },
    { numero: "038/033", nome: "FEIRA DE SANTANA", limite: "04:20", entregue:false, horarioEntrega:null, },
    { numero: "770/767", nome: "SERRINHA//ALAGOINHAS", limite: "04:40", entregue:false, horarioEntrega:null, },
    { numero: "034", nome: "SALVADOR REGIÃO MTP", limite: "07:10", entregue:false, horarioEntrega:null, },
  ],

    EXPEDICAO: [
   { numero: "788/789", nome: "BARREIRAS//IBOTIRAMA", limite: "19:10", entregue:false, horarioEntrega:null, },
    { numero: "039", nome: "TEIXEIRA DE FREITAS", limite: "20:40", entregue:false, horarioEntrega:null, },
    { numero: "030/086/787", nome: "GUANAMBI//BRUMADO//SEABRA", limite: "22:10", entregue:false, horarioEntrega:null, },
    { numero: "035/037", nome: "VDC//POÇÕES", limite: "23:10", entregue:false, horarioEntrega:null, },
    { numero: "043/049", nome: "ITABUNA//GANDU", limite: "00:00", entregue:false, horarioEntrega:null, },
    { numero: "771/786", nome: "SR.BOMFIM//JUAZEIRO", limite: "00:20", entregue:false, horarioEntrega:null, },
    { numero: "064/066", nome: "SERGIPE", limite: "01:10", entregue:false, horarioEntrega:null, },
    { numero: "784/791/778", nome: "IRECÊ//JACOBINA//JEQUIÉ", limite: "01:40", entregue:false, horarioEntrega:null, },
    { numero: "792", nome: "FPP", limite: "02:10", entregue:false, horarioEntrega:null, },
    { numero: "793/007", nome: "ITABERABA//RIBEIRA DO POMBAL", limite: "02:40", entregue:false, horarioEntrega:null, },
    { numero: "765", nome: "SANTO ANTÔNIO", limite: "03:50", entregue:false, horarioEntrega:null, },
    { numero: "038/033", nome: "FEIRA DE SANTANA", limite: "04:40", entregue:false, horarioEntrega:null, },
    { numero: "770/767", nome: "SERRINHA//ALAGOINHAS", limite: "05:00", entregue:false, horarioEntrega:null, },
    { numero: "034", nome: "SALVADOR REGIÃO MTP", limite: "07:30", entregue:false, horarioEntrega:null, },
  ],
  };

   const [rotasPorSetor, setRotasPorSetor] =
  useState(() => {
    const salvo =
      localStorage.getItem(
        "rotasPorSetor"
      );

    return salvo
      ? JSON.parse(salvo)
      : setores;
  });

  const rotas =
    rotasPorSetor[setorSelecionado];


  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
  localStorage.setItem(
    "rotasPorSetor",
    JSON.stringify(rotasPorSetor)
  );
}, [rotasPorSetor]);

  const minutosRestantes = (horario) => {
    const [hora, minuto] = horario.split(":");

    const limite = new Date(agora);

    limite.setHours(Number(hora));
    limite.setMinutes(Number(minuto));
    limite.setSeconds(0);

    if (
      Number(hora) < 12 &&
      limite.getTime() < agora.getTime()
    ) {
      limite.setDate(limite.getDate() + 1);
    }

    return Math.floor(
      (limite.getTime() - agora.getTime()) /
        (1000 * 60)
    );
  };

  const rotasAtrasadas = rotas.filter(
  (rota) => {
    const minutos =
      minutosRestantes(rota.limite);

    return (
      minutos <= 0 &&
      rota.entregue === false
    );
  }
);

const historicoEntregas = rotas
  .filter(
    (rota) =>
      rota.entregue === true
  )
  .reverse();

  const corStatus = (minutos) => {
    if (minutos <= 0) return "#4b5563";

    if (minutos <= 30) return "#dc2626";

    if (minutos <= 60) return "#f59e0b";

    return "#16a34a";
  };
  const marcarComoEntregue = (numeroRota) => {
  setRotasPorSetor((dadosAnteriores) => {
    const copia = { ...dadosAnteriores };

    copia[setorSelecionado] =
      copia[setorSelecionado].map((rota) => {
        if (rota.numero === numeroRota) {
          const atraso =
  Math.abs(
    minutosRestantes(
      rota.limite
    )
  );

return {
  ...rota,
  entregue: true,
  horarioEntrega:
    new Date().toLocaleTimeString(),
  atraso,
};
        }

        return rota;
      });

    return copia;
  });
};

  const rotasAtivas = rotas
    .filter((rota) => {
      const minutos = minutosRestantes(
        rota.limite
      );

      return minutos > 0 && minutos <= 240;
    })
    .sort(
      (a, b) =>
        minutosRestantes(a.limite) -
        minutosRestantes(b.limite)
    );

  const rotasEncerradas = rotas.filter(
  (rota) => {
    const minutos = minutosRestantes(
      rota.limite
    );

    return (
      minutos <= 0 &&
      minutos >= -60 &&
      rota.entregue === false
    );
  }
);

  const rotaPrincipal = rotasAtivas[0];

  const rotaAtrasadaPrincipal =
  rotasEncerradas[0];
  
  const proximaRota =
  rotasAtivas.find(
    (rota) => !rota.entregue
  );

  return (
    <div
      style={{
  width: "100%",
  minHeight: "100vh",
  background: "#0f172a",
  color: "white",
  display: "flex",
  flexDirection: "column",
}}
    >
      <div
        style={{
          height: "80px",
          background: "#111827",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          borderBottom: "2px solid #334155",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "2rem",
          }}
        >
          PAINEL DE ROTAS
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <select
            value={setorSelecionado}
            onChange={(e) =>
              setSetorSelecionado(
                e.target.value
              )
            }
            style={{
              padding: "10px",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
            }}
          >
            <option value="SEPARACAO">
              SEPARAÇÃO
            </option>

            <option value="CONFERENCIA">
              CONFERÊNCIA
            </option>

            <option value="EXPEDICAO">
              EXPEDIÇÃO
            </option>
          </select>

          <h2
            style={{
              margin: 0,
              fontSize: "2rem",
            }}
          >
            {agora.toLocaleTimeString()}
          </h2>
        </div>
      </div>

      <div
  style={{
    display: "flex",
    gap: "10px",
    flex: 1,
    padding: "10px",
  }}
>
  {/* ATRASADA */}

  <div
    style={{
      flex: 1,
      background: "#991b1b",
      borderRadius: "20px",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h1>🚨 ATRASADA</h1>

    {rotaAtrasadaPrincipal ? (
      <>
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          {rotaAtrasadaPrincipal.nome}
        </h1>

        <h2>
          ROTA {rotaAtrasadaPrincipal.numero}
        </h2>

        <button
          onClick={() =>
            marcarComoEntregue(
              rotaAtrasadaPrincipal.numero
            )
          }
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            background: "#22c55e",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          ROTA ENTREGUE
        </button>
      </>
    ) : (
      <h2>Nenhuma rota atrasada</h2>
    )}
  </div>

  {/* PRÓXIMA */}

  <div
    style={{
      flex: 1,
      background: "#1d4ed8",
      borderRadius: "20px",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h1>⏳ PRÓXIMA ROTA</h1>

    {proximaRota && (
      <>
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          {proximaRota.nome}
        </h1>

        <h2>
          ROTA {proximaRota.numero}
        </h2>

        <h2>
          {proximaRota.limite}
        </h2>

        <h2>
          {minutosRestantes(
            proximaRota.limite
          )}{" "}
          MIN RESTANTES
        </h2>
      </>
    )}
  </div>
</div>

      <div
  style={{
    background: "#111827",
    padding: "15px",
    display: "flex",
    gap: "15px",
    overflowX: "auto",
    flexShrink: 0,
  }}
>
        {rotasAtivas.slice(1).map((rota) => (
          <div
            key={`${rota.numero}-${rota.nome}`}
            style={{
              minWidth: "280px",
              background: corStatus(
                minutosRestantes(
                  rota.limite
                )
              ),
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <h3>{rota.nome}</h3>
            <p>ROTA {rota.numero}</p>
            <p>LIMITE {rota.limite}</p>
          </div>
        ))}

        {rotasEncerradas.map((rota) => (
          <div
            key={`enc-${rota.numero}-${rota.nome}`}
            style={{
              minWidth: "280px",
              background: "#374151",
              borderRadius: "10px",
              padding: "15px",
              opacity: 0.7,
            }}
          >
            <h3>{rota.nome}</h3>

<p>ROTA {rota.numero}</p>

<p>ATRASADA</p>

<button
  onClick={() =>
    marcarComoEntregue(
      rota.numero
    )
  }
  style={{
    marginTop: "10px",
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  ROTA ENTREGUE
</button>
          </div>
        ))}
      </div>
      <div
  style={{
    background: "#111827",
    padding: "20px",
    borderTop: "2px solid #334155",
  }}
>
  <h2>
    📋 HISTÓRICO DE ENTREGAS
  </h2>

  <div
    style={{
      display: "flex",
      gap: "15px",
      overflowX: "auto",
    }}
  >
    {historicoEntregas.map(
      (rota) => (
        <div
          key={`hist-${rota.numero}`}
          style={{
            minWidth: "300px",
            background: "#374151",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{rota.nome}</h3>

          <p>
            ROTA {rota.numero}
          </p>

          <p>
            Limite:{" "}
            {rota.limite}
          </p>

          <p>
            Entregue:{" "}
            {rota.horarioEntrega}
          </p>

          <p>
            Atraso:{" "}
            {rota.atraso || 0}
            {" "}min
          </p>
        </div>
      )
    )}
  </div>
</div>
    </div>
  );
}
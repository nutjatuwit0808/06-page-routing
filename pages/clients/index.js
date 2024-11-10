import Link from "next/link";
import React from "react";

function ClientsPage() {
  const clients = [
    { id: "nut", name: "jatuwit" },
    { id: "jp", name: "nutjatuwit" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{
                pathname: '/clients/[id]',
                query: {id: client.id}
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;

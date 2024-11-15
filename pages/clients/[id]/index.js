import { useRouter } from "next/router";
import React from "react";

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        //load data ...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {
                id: "nut",
                clientprojectid: "projecta"
            }
        })
    }
    
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;

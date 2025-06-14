import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos da sua clinica</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            {" "}
            <Plus />
            Adicionar Médicos
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>Médicos</PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;

import { AppShell, Grid, GridCol, SimpleGrid } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TableReviews } from '@/components/TableReviews/TableReviews';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { DoubleHeader } from '@/components/ContactUs/DoubleHeader/DoubleHeader';
import { DoubleNavbar } from '@/components/DoubleNavBar/DoubleNavBar';
import { Container, Skeleton } from '@mantine/core';

const PRIMARY_COL_HEIGHT = '300px';
//import { Grid } from '@mantine/core';

function TwoColumnLayout() {
  return (
    <Grid gutter="md">
      {/* Left Column (1/3 of viewport width) */}
      <Grid.Col span={{ base: 12, sm: 2 }}> 
        <div style={{ height: '100vh',  }}>
          <DoubleNavbar/>
        </div>
      </Grid.Col>

      {/* Right Column (2/3 of viewport width) */}
      <Grid.Col span={{ base: 12, sm: 10 }}>
        <div style={{ height: '100vh',  }}>
        <Welcome />
        <ColorSchemeToggle />
        <TableReviews/>
        <ContactUs/>
        </div>
      </Grid.Col>
    </Grid>
  );
}





export function HomePage() {
  return (
    <>
    <DoubleHeader/>
    <TwoColumnLayout/>
     
    </>
  );
}
import { AppShell, Grid, GridCol, SimpleGrid } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TableReviews } from '@/components/TableReviews/TableReviews';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { DoubleHeader } from '@/components/ContactUs/DoubleHeader/DoubleHeader';
import { DoubleNavbar } from '@/components/DoubleNavBar/DoubleNavBar';
import { Container, Skeleton } from '@mantine/core';

const PRIMARY_COL_HEIGHT = '300px';

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md" style={{width:"100vw"}} fluid>
      <SimpleGrid 
        cols={{ base: 1, sm: 2 }} // 3-column layout on desktop
        spacing="md"
      >
        {/* Left item - takes 1/3 width */}
        <Grid
        
        >
          <Grid.Col>
          <DoubleNavbar 
         gutter="md" 
         span={1} // Takes remaining 2/3
         style={{   display: 'flex', flexDirection: 'column' }}
         />

          </Grid.Col>
        </Grid>
        

        {/* Right grid - takes 2/3 width */}
        <Grid 
          gutter="md" 
          span={2} // Takes remaining 2/3
          style={{  display: 'flex', flexDirection: 'column' }}
        >
          <Grid.Col>
          <Welcome 
          
           />
          <ColorSchemeToggle
           />
           <TableReviews 
           
          />
          </Grid.Col>
          
          
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
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
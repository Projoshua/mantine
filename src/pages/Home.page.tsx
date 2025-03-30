import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TableReviews } from '@/components/TableReviews/TableReviews';
import { ContactUs } from '@/components/ContactUs/ContactUs';
export function HomePage() {
  return (
    <>
      
      
      <Welcome />
      <ColorSchemeToggle />
      <TableReviews/>
      <ContactUs/>
    </>
  );
}

import Container from "./components/common/Container";
import SearchSortProvider from "./components/context/SearchSortProvider";
import Navbar from "./components/navbar/Navbar";
import ChakraProviderGlobal from "./wrappers/ChakraProviderGlobal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <ChakraProviderGlobal>
              <SearchSortProvider>
                <Navbar/>
                <Container>
                    {children}
                </Container>
              </SearchSortProvider>
            </ChakraProviderGlobal>
        </body>
    </html>
  )
}

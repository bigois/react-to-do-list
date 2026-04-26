import { AbsoluteCenter, Button, Heading, Separator, Stack } from '@chakra-ui/react';
import './app.css';

function App() {
    return (
        <AbsoluteCenter>
            <Stack>
                <Heading>Olá, React Essentials!</Heading>
                <Separator />
                <Button>Clique aqui!</Button>
            </Stack>
        </AbsoluteCenter>
    );
}

export default App;

import React,{useContext} from 'react';
import { Container, Icon, Select, TextInput, Textarea, Button, Card } from 'react-materialize';
import { ThemeContext } from './ThemeContext';
export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const { theme2, theme } = useContext(ThemeContext);
    return (

        <Container>
            <div className='form-container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <h2>Contact us</h2>
                <Card>
                    <form onSubmit={handleSubmit} style={{ backgroundColor: theme2.backgroundColor, color: theme2.color }} >
                        <TextInput id="TextInput-38" label="Your Name" />
                        <TextInput id="TextInput-39" label="Your Phone" />
                        <TextInput id="TextInput-41" label="Email" validate />
                        <Select id="Select-46" multiple={false} onChange={() => { }} value="">
                            <option disabled value="">
                                Choose your favorite nation
                            </option>
                            <option value="1">America</option>
                            <option value="2">England</option>
                            <option value="3">Vietnam</option>
                        </Select>
                        <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content" />
                        <Button type="submit">Submit</Button>
                    </form>
                </Card>
            </div>
        </Container>

    );
}

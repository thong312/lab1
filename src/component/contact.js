import React from 'react';
import { Container, Icon, Select, TextInput, Textarea, Button, Card } from 'react-materialize';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (

        <Container>
            <div className='form-container'>
                <h2>Contact us</h2>
                <Card>
                    <form onSubmit={handleSubmit}>
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

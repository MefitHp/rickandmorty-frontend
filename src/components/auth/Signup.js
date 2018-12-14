import React from 'react'
import {
    Form, Icon, Input, Button,
} from 'antd';

const FormItem = Form.Item;


const Signup = ({ handleInput, handleSignup }) => {
    return (
        <div>
            <h2>Formulario de registro</h2>
            <Form layout="inline" onSubmit={handleSignup}>
                <FormItem
                >
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} placeholder="Email" name="email" />
                </FormItem>
                <FormItem
                >

                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} type="password" placeholder="Password" name="password" />
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Signup
                    </Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default Signup

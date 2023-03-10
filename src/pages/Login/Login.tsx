import React, {FC, useCallback} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,Card,message } from 'antd';
import './Login.css';
import {login} from "../../Firebase/Firebase";
import {useNavigate} from "react-router-dom";

export const Login:FC = () => {
 const navigate = useNavigate()
    const onFinish = useCallback(async (values:any)=> {
        console.log(values)
        try{
            await login(values);
            message.success('Successful');
            navigate('/')
        }catch (e:any){
            message.error(e.message);
        }
    },[navigate])
  return (

        <div className="mainPageLogin">

          <div className="container-login">
              <div style={{padding:'30px 40px 0px 40px'}}>
                  <h4>" මෙම සහතික පත්‍ර නිකුත් කිරීමේ මාර්ගගත පද්ධතිය ර/කුමර විද්‍යාලය - නවනගරය,රත්නපුරය . සතු දේපලකි. එය අනවසරයෙන් භාවිතයට ගැනීම , පිටපත් කර ගැනීම, අන්සතු කිරීම සහ ඒ ආශ්‍රිතව කරන සියලු අනවසර අවභාවිතාවන්ට එරහිව 2007 අංක 24 දරන පරිගණක අපරාද පනත යටතේ සහ 2003 අංක 36 දරන බුද්ධ්මය දේපල පනත යන නීතිමය ප්‍රතිපාදනයන්ට අනුව කටයුතු කරනු ඇත."
                  </h4>
                  <h4>" Online system for issuing these certificates R/Kumara Vidyalaya - Nava nagaraya, Ratnapura. Owned property. Its unauthorized use, copying, misappropriation and all related unauthorized use will be dealt with in accordance with the provisions of the Computer Crime Act No. 24 of 2007 and the Intellectual Property Act No. 36 of 2003."</h4>
              </div>

            <Card style={{minWidth:'500px'}} title={'LogIn'} headStyle={{justifyContent:'center',display:'flex',alignItems:'center'}}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>



            </Card>
          </div>
        </div>

  )
}

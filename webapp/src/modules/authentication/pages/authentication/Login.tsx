
/**
 * Generated by ExoCoding 0.0.1
 */

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './Login.module.css';
import { updateNestedProperty } from '@/utils';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import SessionContext from '@/modules/authentication/session';
import { useContext } from 'react';
import { UserLogin } from '@/modules/authentication/types';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

type LoginProps = {
};

/**
 * A simple login page
 */
export const Login = (props: LoginProps) => {
  
        const [showPassword69feb, setShowPassword69feb] = React.useState<boolean>();
        const [tempUserLogin, setTempUserLogin] = useImmer<UserLogin>({} as UserLogin);
        const [sdfsdfsd, setSdfsdfsd] = React.useState<string>();

    useTitle('Login');
    const session = useContext(SessionContext);

  function sdfsdf( ){
  }
    return (
      <>

    
        <Row className={`${styles.componentAWPAHqpMvb} `} >

    
    <div className={`d-flex ${styles.componentGXWogsTaGF} `} >

    
                <h1 className={`${styles.componentWWksBnvNhA} `}>
                    Sign In
                </h1>
    

    <Form.Group className={`${styles.componentSXLiAhBatT} `}>
            <Form.Label>
                Email
            </Form.Label>
        <InputGroup style={{boxShadow: ""}}>
            <Form.Control
                type="email"
disabled={false}
style={{backgroundColor: "", borderColor: ""}}
            value={tempUserLogin?.email}
onChange={e => setTempUserLogin(
draft => { draft.email = e.target.value; }
)}            />
        </InputGroup>
    </Form.Group>

    <Form.Group className={`${styles.componentNnNoNchRhI} `}>
            <Form.Label>
                Password
            </Form.Label>
        <InputGroup style={{boxShadow: ""}}>
            <Form.Control
                type={"showPassword69feb" ? 'text' : 'password'}
style={{backgroundColor: "", borderColor: ""}}
            value={tempUserLogin?.password}
onChange={e => setTempUserLogin(
draft => { draft.password = e.target.value; }
)}            />
            <Button variant="outline-secondary" onClick={() => setShowPassword69feb(!showPassword69feb)}>
                {showPassword69feb ? <FontIcon.FaEyeSlash /> : <FontIcon.FaEye />}
            </Button>
        </InputGroup>
    </Form.Group>

    
        <Button
            variant="secondary"
            className={`${styles.componentJpiQiflIjY} `}
            
        >
                Sign In

        </Button>
    

    
                <a href="/signup" className={`${styles.hm_jbod} `}>
                    Create an account.
                </a>
    
    </div>
    
        </Row>
    
      </>
    )
};

// @flow
import * as React from 'react';
import { FC, useRef } from 'react';
import { MainLayout } from '../../layout/mainLayout/MainLayout';
import { UserOutlined } from '@ant-design/icons';
import {Button, Empty} from 'antd';
import { useReactToPrint } from 'react-to-print';
import background from '../../Components/CertificateBuilder/certificate-img.png';
import {useCache} from "../../context/CacheContext";
export const SingleEvent: FC = () => {
  // const childRef = useRef<CertificateModalInstance>(null);
    const { currentEvent } = useCache();
  const printPreviewRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => printPreviewRef.current,
    pageStyle: ' @page { size: A4 landscape; margin: 0;}',
  });
  return (
    <MainLayout>
        {currentEvent ? <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <h1>{currentEvent?.event}</h1>
            <Button
                onClick={() => {
                    // navigate('/single-event');
                    handlePrint();
                }}
                type="primary"
                icon={<UserOutlined/>}>
                Print Certificates
            </Button>
            {/*<ReactToPrint*/}
            {/*    pageStyle=" @page { size: A4 landscape; margin: 0;}"*/}
            {/*    trigger={() => <button>Print this out!</button>}*/}
            {/*    content={() => printPreviewRef.current}*/}
            {/*/>*/}
            <div ref={printPreviewRef}>
                {currentEvent?.winners.map((v, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${background})`,
                            height: '8.25in',
                            width: '11.69in',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}>
                        <div
                            style={{
                                paddingLeft: 140,
                                paddingTop: 350,
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                            }}>
                          {v.name}
                        </div>
                        <div
                            style={{paddingLeft: 260, paddingTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
                          {v.house}
                        </div>
                        <div
                            style={{paddingLeft: 260, paddingTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
                          {v.place}
                        </div>
                        <div
                            style={{paddingLeft: 260, paddingTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
                          {currentEvent?.event}
                        </div>
                        <div
                            style={{paddingLeft: 260, paddingTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
                          {currentEvent?.ageRange}
                        </div>
                        <div
                            style={{paddingLeft: 260, paddingTop: 60, fontWeight: 'bold', fontStyle: 'italic'}}>
                            {v.achievement ?? '-'}
                        </div>
                    </div>
                ))}
            </div>
        </div> : <Empty style={{ marginTop: 30}} description={'No event for print'}/>}
    </MainLayout>
  );
};

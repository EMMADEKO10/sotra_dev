import { Row, Col, Typography, Card, Avatar, Tag } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import Meta from 'antd/lib/card/Meta'; // Import Meta separately

const { Title, Paragraph } = Typography;

export default function Blog() {
    return (
        <>
            <div className="blog-area bg-gray py-12">
                <div className="container mx-auto">
                    <div className="text-center">
                        <Title level={5}>Dernières nouvelles</Title>
                        <Title level={2} className="mb-6">
                            Restez informé avec nous des <br /> dernières et populaires nouvelles
                        </Title>
                        <div className="border-b-2 border-gray-400 w-24 mx-auto mb-6"></div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <Row gutter={[16, 16]}>
                        {/* First Post */}
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <Card
                                hoverable
                                cover={<img alt="Thumb" src="/blogs/side-view-people-chatting-work.jpg" />}
                            >
                                <Meta
                                    title={<a href="#">Avantage franchise à conclu peu disposé.</a>}
                                    description={
                                        <>
                                            <div className="flex items-center">
                                                <Avatar src="/avatar.jpg" size="small" className="mr-2" />
                                                <a href="#">Jones</a>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#"><i className="fas fa-comments"></i> 12 Commentaires</a>
                                            </div>
                                            <Paragraph ellipsis={{ rows: 3 }}>
                                                Le tribunal est de nouveau en congé comme je le suis. Plus de 16 ans pour former le colonel no on be. Donc un conseil à peine barton processus.
                                            </Paragraph>
                                            <a className="btn-more" href="#">Read More</a>
                                        </>
                                    }
                                />
                            </Card>
                        </Col>

                        {/* Second Post */}
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <Card
                                hoverable
                                cover={<img alt="Thumb" src="/blogs/medium-shot-photographer-groom.jpg" />}
                            >
                                <Meta
                                    title={<a href="#">Extrêmement dépendant il gentleman s’améliorant.</a>}
                                    description={
                                        <>
                                            <div className="flex items-center">
                                                <Avatar src="/avatar.jpg" size="small" className="mr-2" />
                                                <a href="#">Spark</a>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#"><i className="fas fa-comments"></i> 26 Commentaires</a>
                                            </div>
                                            <Paragraph ellipsis={{ rows: 3 }}>
                                                Le tribunal est de nouveau en congé comme je le suis. Plus de 16 ans pour former le colonel no on be. Donc un conseil à peine barton processus.
                                            </Paragraph>
                                            <a className="btn-more" href="#">Read More</a>
                                        </>
                                    }
                                />
                            </Card>
                        </Col>

                        {/* Third Post */}
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <Card
                                hoverable
                                cover={<img alt="Thumb" src="/blogs/photo-serious-black-man-holds-chin-carries-yellow-mug-drink-looks-directly-camera-wears-red-hat-shirt.jpg" />}
                            >
                                <Meta
                                    title={<a href="#">Il a écrit comme un bruit connu.</a>}
                                    description={
                                        <>
                                            <div className="flex items-center">
                                                <Avatar src="/avatar.jpg" size="small" className="mr-2" />
                                                <a href="#">Mohin</a>
                                            </div>
                                            <div className="mt-2">
                                                <a href="#"><i className="fas fa-comments"></i> 00 Commentaires</a>
                                            </div>
                                            <Paragraph ellipsis={{ rows: 3 }}>
                                                Le tribunal est de nouveau en congé comme je le suis. Plus de 16 ans pour former le colonel no on be. Donc un conseil à peine barton processus.
                                            </Paragraph>
                                            <a className="btn-more" href="#">Read More</a>
                                        </>
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

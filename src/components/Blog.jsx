import { Row, Col, Typography, Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';

const { Title, Paragraph } = Typography;

export default function Blog() {
    // Exemple de données fictives pour les articles de blog
    const articles = [
        {
            title: "RSE Market Place : Nouvelle initiative révolutionnaire",
            author: "John Doe",
            avatar: "/avatars/john_doe.jpg",
            comments: 12,
            image: "/blogs/RSE au cœur de la stratégie.jpg",
            content: "Découvrez comment la RSE Market Place transforme l'investissement social avec transparence et impact durable.",
            link: "#"
        },
        {
            title: "Entretien avec la Fondation SARA : Promouvoir la solidarité",
            author: "Jane Smith",
            avatar: "/avatars/jane_smith.jpg",
            comments: 26,
            image: "/blogs/Sara A.png",
            content: "Explorez les efforts de la Fondation SARA pour promouvoir la solidarité à travers ses initiatives sociales innovantes.",
            link: "#"
        },
        {
            title: "Impact environnemental : Initiatives durables de la Fondation Entreprendre",
            author: "Michael Johnson",
            avatar: "/avatars/michael_johnson.jpg",
            comments: 8,
            image: "/blogs/7.jpg",
            content: "Découvrez comment la Fondation Entreprendre contribue à la durabilité environnementale à travers ses projets novateurs.",
            link: "#"
        }
    ];

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
                        {articles.map((article, index) => (
                            <Col key={index} xs={24} sm={24} md={12} lg={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Thumb" src={article.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                                >
                                    <Meta
                                        title={<a href={article.link}>{article.title}</a>}
                                        description={
                                            <>
                                                <div className="flex items-center">
                                                    <Avatar src={article.avatar} size="small" className="mr-2" />
                                                    <a href="#">{article.author}</a>
                                                </div>
                                                <div className="mt-2">
                                                    <a href="#"><i className="fas fa-comments"></i> {article.comments} Commentaires</a>
                                                </div>
                                                <Paragraph ellipsis={{ rows: 3 }}>{article.content}</Paragraph>
                                                <a className="btn-more" href={article.link}>Lire plus</a>
                                            </>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}

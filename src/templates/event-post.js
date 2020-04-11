import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/utils";
import "../components/main.css";
import EventRoll from "../components/EventRoll";

export const BlogPostTemplate = ({
	title,
	content,
	contentComponent,
	date
}) => {
	const PostContent = contentComponent || Content;

	return (
		<>
			<div className="event-detail">
				<h2 className="article-detail-title"></h2>
				<p>{date}</p>
				<PostContent content={content} />
			</div>
		</>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,

	title: PropTypes.string,
	helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<EventRoll />
			{/* <BlogPostTemplate
				data={data}
				content={post.html}
				contentComponent={HTMLContent}
				location={post.frontmatter.location}
				date={post.frontmatter.date}
				helmet={
					<Helmet titleTemplate="%s | Blog">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="date"
							content={`${post.frontmatter.date}`}
						/>
						<meta
							name="location"
							content={`${post.frontmatter.location}`}
						/>
						<meta
							name="image"
							content={`${post.frontmatter.image}`}
						/>
					</Helmet>
				}
				title={post.frontmatter.title}
			/> */}
		</Layout>
	);
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				location
			}
		}
	}
`;

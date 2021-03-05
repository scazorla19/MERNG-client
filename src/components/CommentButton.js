import React from "react";
import { Link } from "react-router-dom";
import { Button, Popup } from "semantic-ui-react";

function CommentButton({ comment: { id, commentCount } }) {
	return (
		<Popup
			content='Comment on post'
			inverted
			trigger={
				<Button
					as={Link}
					to={`/posts/${id}`}
					color='blue'
					basic
					icon='comments'
					label={{
						basic: true,
						color: "blue",
						pointing: "left",
						content: `${commentCount}`,
					}}
				/>
			}
		/>
	);
}

export default CommentButton;

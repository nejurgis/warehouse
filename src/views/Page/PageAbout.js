import ReactMarkdown from 'react-markdown'
import { CloseButton, Newsletter } from '_components'

const PageAbout = ({ frontmatter }) => {
	if (!frontmatter) return <></>

	const { title = '', leftColumn, rightColumn, other, images } = frontmatter

	return (
		<div className='Page'>
			<CloseButton back={'/'} />
			<div className='Page__wrapper'>
				<div className='Page__left'>
					<h2 className='Page__title'>
						{title}
						<span className='Page__caps'>{leftColumn}</span>
					</h2>
				</div>
				<div className='Page__right'>
					<ReactMarkdown linkTarget={'_blank'} escapeHtml={false} source={rightColumn} />
					{images &&
						images.map(({ image, caption }, i) => {
							return (
								<div key={'img--' + i}>
									{image && <img src={image} />}
									<p className='caption caption-Page'>{caption ? caption : ''}</p>
								</div>
							)
						})}

					<div className='Page__other'>
						<ReactMarkdown escapeHtml={false} source={other} />
					</div>
					<div className='Page__other'>
						<Newsletter />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageAbout

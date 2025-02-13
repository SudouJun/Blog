
import Image from 'next/image'
import TagItem from './TagItem'
import md5 from 'js-md5'
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'

export const ArticleInfo = (props) => {
  const { post } = props

  const emailHash = md5(siteConfig('CONTACT_EMAIL', '#'))

  return <section className="flex-wrap flex mt-2 text-gray--600 dark:text-gray-400 font-light leading-8">
        <div>

            <h1 className="font-bold text-3xl text-black dark:text-white">
                {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{post?.title}
            </h1>

            {post?.type !== 'Page' && <>
                <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
                    <div className="flex mb-4">
                        <a href={siteConfig('CONTACT_GITHUB', '#')} className="flex">
                            <Image
                                alt={siteConfig('AUTHOR')}
                                width={24}
                                height={24}
                                src={`https://img.notionusercontent.com/s3/prod-files-secure%2Fc5f68112-08ca-4a2a-a256-3c74693870fc%2F1f4b72e8-a985-4690-a4a8-4cdc1a2cf558%2F%E9%85%A5%E9%80%97%E8%8F%8C.jpg/size/w=60?exp=1739530850&sig=zaVp8qSN_yaJG1mUnwoSSp9c7eYJ9RXBsnGXpGRQSgs`}
                                className="rounded-full"
                            />
                            <p className="ml-2 md:block">{siteConfig('AUTHOR')}</p>
                        </a>
                        <span className="block">&nbsp;/&nbsp;</span>
                    </div>
                    <div className="mr-2 mb-4 md:ml-0">
                        {post?.publishDay}
                    </div>
                    {post?.tags && (
                        <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                            {post?.tags.map(tag => (
                                <TagItem key={tag} tag={tag} />
                            ))}
                        </div>
                    )}
                    <span className="hidden busuanzi_container_page_pv mr-2">
                        <i className='mr-1 fas fa-eye' />
                        &nbsp;
                        <span className="mr-2 busuanzi_value_page_pv" />
                    </span>
                </nav>
            </>}

        </div>

    </section>
}

interface PostDataInterface {
  date: string
  title: string
  id: string
}

type PostsDataType = PostDataInterface[]

export type { PostDataInterface, PostsDataType }

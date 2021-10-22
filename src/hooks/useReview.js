import { useMutation } from '@apollo/client'
import { CREATE_REVIEW, DELETE_REVIEW } from '../qraphql/queries'

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)
  const [remove] = useMutation(DELETE_REVIEW)

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const result = await mutate({
      variables: {
        ownerName,
        repositoryName,
        rating,
        text
      }
    })

    return result
  }

  const deleteReview = async ({ id }) => {
    const result = await remove({
      variables: {
        id
      },
      refetchQueries: [{ query: CREATE_REVIEW }]
    })
    return result
  }

  return [createReview, result, deleteReview]
}

export default useReview
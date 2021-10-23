import { useMutation } from '@apollo/client'
import { CREATE_REVIEW, DELETE_REVIEW, GET_USER } from '../qraphql/queries'

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
    try {
      const result = await remove({
        variables: {
          id
        },
        refetchQueries: [{
          query: GET_USER,
          variables: {
            includeReviews: true
          }
        }]
      })
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return [createReview, result, deleteReview]
}

export default useReview
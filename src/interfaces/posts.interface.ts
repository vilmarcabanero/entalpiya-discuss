/**
 * An interface that describes the properties of the post that can be used as a payload or response.
 * @userId string
 * @message string
 * @likers string[]
 * @hidden boolean
 * @createdAt Date
 * @updatedAt Date
 * @id string
 * @version number
 */
export interface Post {
  _id: string
  userId: string
  message: string
  likers: string[]
  hidden: boolean
  createdAt: Date
  updatedAt: Date
  version: number
}

/**
 * An interface that describes the response for healthcheck request.
 * @healthcheck string
 */
export interface HealthCheckResponse {
  healthcheck: string
}

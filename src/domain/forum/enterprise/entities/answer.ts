import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface AnswerProps {
  content: string
  createdAt: Date
  updatedAt?: Date
  authorId: UniqueEntityID
  questionId: UniqueEntityID
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.content
  }

  get updatedAt() {
    return this.props.content
  }

  get authorId() {
    return this.props.content
  }

  get questionId() {
    return this.props.content
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const answer = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return answer
  }
}

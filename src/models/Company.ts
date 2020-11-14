import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('companies')
export default class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  about: string

  @Column()
  image: string

  @Column({ default: false })
  following: boolean
}

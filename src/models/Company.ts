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
  logo: string

  @Column({ default: false })
  following: boolean

  @Column()
  stories: string
}

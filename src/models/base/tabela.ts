import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne, JoinColumn,OneToMany, Double } from "typeorm";

@Entity('tabelas')
export default class  tabela {
  
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  Item: number
  
  @Column()
  Designacao?: string

  @Column()
  Descricao?: string

  @Column()
  Unidade?: string

  @Column()  
  Coeficiente?: String;

}
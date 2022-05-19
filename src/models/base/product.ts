import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";

@Entity('products')
export default class  Product {
  
  @PrimaryGeneratedColumn('increment')
  intem:number;
  
  @Column({length: 50, nullable:false })
  Designacao?: string

  @Column({length: 50, nullable:false })
  Descricao?: string

  @Column()
  Unidade?: string

  @Column()  
  Coeficiente: number;

}



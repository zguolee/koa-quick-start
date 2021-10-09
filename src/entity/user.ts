import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity 用于装饰整个类，使其变成一个数据库模型
// PrimaryGeneratedColumn 则是装饰主列，它的值将自动生成
// Column 用于装饰类的某个属性，使其对应于数据库表中的一列，可提供一系列选项参数
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column()
  email: string;
}

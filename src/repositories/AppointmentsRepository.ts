import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
// Data Trans Object
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;

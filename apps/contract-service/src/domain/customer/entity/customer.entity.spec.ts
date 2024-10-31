import { Customer, CustomerProps } from './customer.entity';

describe('Customer entity', () => {
  it('should create a new Customer entity', () => {
    const props: CustomerProps = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      identity: '123456789',
      address: '123 Main St',
    };

    const customer = new Customer({
      id: 1,
      props: props,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(customer.props).toEqual(props);
  });
});

import React from "react";
import useCustomerStore from "../../store/useCustomerStore";

const TestCustomers = () => {
  const { customers, addCustomer, removeCustomer } = useCustomerStore(
    (store) => store
  );
  console.log(customers);

  //   useEffect(() => {
  //     addCustomer({
  //       name: "koko",
  //       id: customers.length + 1,
  //       address: "address",
  //       email: "email",
  //       phone: "094537378",
  //     });
  //   }, []);

  return (
    <React.Fragment>
      <section className="w-1/2 mx-auto min-h-screen ">
        {customers &&
          Array.isArray(customers) &&
          customers?.map((customer) => {
            return (
              <div
                className="flex justify-between p-3 my-2 bg-slate-300 rounded-2xl px-3"
                key={customer.id}
              >
                <div>
                  <p>{customer?.name}</p>
                  <p className="my-2">
                    {customer.email} | {customer.address}
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => removeCustomer(customer?.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="ms-2"
                    type="button"
                    onClick={() =>
                      addCustomer({ ...customer, id: customers.length + 1 })
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default TestCustomers;

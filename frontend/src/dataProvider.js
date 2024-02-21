import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://nguyenvantuanolivas.mooo.com/api';
const apiUrl2 = 'http://nguyenvantuanolivas.mooo.com/api4';

const dataProvider = simpleRestProvider(apiUrl);



const customDataProvider = {
  ...dataProvider,

  // Ghi đè phương thức getList để tùy chỉnh việc fetch API
  getList: (resource, params) => {
    const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => ({
        data: data,
        total: data.length,
      }))
      .catch(error => {
        console.error('Error:', error);
        throw new Error('Error fetching data from API');
      });
  },

  // Ghi đè phương thức create để tùy chỉnh việc tạo mới dữ liệu
  create: (resource, params) => {
    const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params.data),
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw new Error('Error creating data');
    });
  },

  // Ghi đè phương thức update để tùy chỉnh việc cập nhật dữ liệu
  update: (resource, params) => {
    const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}/${params.id}`;
   

    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(params.data),
    })
    .then(response => response.json())
   

    .catch(error => {
      console.error('Error:', error);
      throw new Error('Error updating data');
    });
  },

  // Ghi đè phương thức updateMany để tùy chỉnh việc cập nhật nhiều dữ liệu
  // updateMany: (resource, params) => {
  //   const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}/updateMany`;

  //   return fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(params.data),
  //   })
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error('Error:', error);
  //     throw new Error('Error updating many data');
  //   });
  // },

  // Ghi đè phương thức delete để tùy chỉnh việc xóa dữ liệu
  delete: (resource, params) => {
    const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}/${params.id}`;

    return fetch(url, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw new Error('deleted data');
    });
  },

  // Ghi đè phương thức deleteMany để tùy chỉnh việc xóa nhiều dữ liệu
  deleteMany: (resource, params) => {
    const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}`;

    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params.ids),
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw new Error('Error deleting many data');
    });
  },

  // Ghi đè phương thức getOne để tùy chỉnh việc lấy một dữ liệu
getOne: async (resource, params) => {
  const url = `${resource.startsWith('tour') ? apiUrl2 : apiUrl}/${resource}/${params.id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Thêm trường 'id' vào đối tượng phản hồi
    if (data) {
      data.id = params.id;
      
    }

    return {
      data: data,
    };
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error fetching data from API');
  }
},


};

export default customDataProvider;

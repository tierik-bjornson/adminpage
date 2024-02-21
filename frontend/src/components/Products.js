import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, TextInput, DeleteButton, UpdateButton, UPDATE, useRecordContext} from "react-admin";

export const listProducts = (props) =>(
    <List {...props}>
        <Datagrid>
            <TextField source = 'id' label='id'></TextField>
            <TextField source = 'title' label='Tên Tour'></TextField>
            <TextField source = 'description' label='Mô tả'></TextField>
            <TextField source = 'price' label='Giá'></TextField>
            <TextField source = 'discountPercentage' label='% Giảm giá'></TextField>
            <TextField source = 'rating' label='Đánh giá'></TextField>
            <TextField source = 'stock' label='Còn trống'></TextField>
            <TextField source = 'brand' label='Địa điểm'></TextField>
            <TextField source = 'category' label='Loại địa hình'></TextField>
            <TextField source = 'thumbnail'></TextField>
       
             


            <EditButton basePath= 'products'></EditButton>
            <DeleteButton basePath='products' />
            

        </Datagrid>
    </List>
)



export const editProducts = (props) =>(
 
    <Edit {...props} >
        <SimpleForm>
            <TextInput source = 'id' label='id'></TextInput>
            <TextInput source = 'title' label='Tên Tour'></TextInput>
            <TextInput source = 'description' label='Mô tả'></TextInput>
            <TextInput source = 'price' label='Giá'></TextInput>
            <TextInput source = 'discountPercentage' label='% Giảm giá'></TextInput>
            <TextInput source = 'rating' label='Đánh giá'></TextInput>
            <TextInput source = 'stock' label='Còn trống'></TextInput>
            <TextInput source = 'brand' label='Địa điểm'></TextInput>
            <TextInput source = 'category' label='Loại địa hình'></TextInput>
            <TextInput source = 'thumbnail'></TextInput>
          
        </SimpleForm>
    </Edit>

)

export const createProducts = (props) =>(
    <Create {...props}  >
        <SimpleForm>
            <TextInput source = 'id' label='id'></TextInput>
            <TextInput source = 'title' label='Tên Tour'></TextInput>
            <TextInput source = 'description' label='Mô tả'></TextInput>
            <TextInput source = 'price' label='Giá'></TextInput>
            <TextInput source = 'discountPercentage' label='% Giảm giá'></TextInput>
            <TextInput source = 'rating' label='Đánh giá'></TextInput>
            <TextInput source = 'stock' label='Còn trống'></TextInput>
            <TextInput source = 'brand' label='Địa điểm'></TextInput>
            <TextInput source = 'category' label='Loại địa hình'></TextInput>
            <TextInput source = 'thumbnail'></TextInput>
          
      
        </SimpleForm>
    </Create>

)


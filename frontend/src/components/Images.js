import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, TextInput, DeleteButton} from "react-admin";

export const listImage = (props) =>(
    <List {...props}>
        <Datagrid>
            
            <TextField source = 'url'></TextField>
            <TextField source = 'tourId' label='TourId'></TextField>
            
       
             


            <EditButton basePath= 'image'></EditButton>
            <DeleteButton basePath= 'image'></DeleteButton>

        </Datagrid>
    </List>
)

export const editImage = (props) =>(
    <Edit {...props} >
        <SimpleForm>
        
            <TextInput source = 'url'></TextInput>
            <TextInput source = 'tourId'></TextInput>
           
            
          

        </SimpleForm>
    </Edit>

)

export const createImage = (props) =>(
    <Create {...props}>
        <SimpleForm>
           
            <TextInput source = 'url'></TextInput>
            <TextInput source = 'tourId'></TextInput>
            
          
      
        </SimpleForm>
    </Create>

)


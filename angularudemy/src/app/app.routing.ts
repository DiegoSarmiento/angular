import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar Componentes
import { EmpleadoComponent } from "./empleado/empleado.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {path: '', component: EmpleadoComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'pagina-principal', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: '**', component: HomeComponent},

];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { Header } from 'components/common';
import { Main } from 'components/common/main';
import { Sitebar } from 'components/common/sitebar';
import Dashboard from 'features/dashboard';
import Student from 'features/student';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
export function AdminLayout() {
    return (
        <div className="admin-layout">
            <section className="admin-layout__header">
                <div className="container">
                    <Header />
                </div>
            </section>

            <section className="admin-layout__body">
                <div className="container">
                    <div className="row">
                        <div className="col lg-2">
                            <div className="admin-layout__sitebar">
                                <Sitebar />
                            </div>
                        </div>
                        <div className="col lg-10">
                            <div className="admin-layout__main">
                                <Main />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

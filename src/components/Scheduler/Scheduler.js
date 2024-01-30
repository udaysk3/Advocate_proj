// schedular.js
import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import Sform from './Sform';

const scheduler = window.scheduler;

export default class Scheduler extends Component {
    state = {
        schedulerEvents: [],
    };

    initSchedulerEvents() {
        if (scheduler._$initialized) {
            return;
        }

        const onDataUpdated = this.props.onDataUpdated;

        scheduler.attachEvent('onEventAdded', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('create', ev, id);
            }
            this.updateSchedulerEvents();
        });

        scheduler.attachEvent('onEventChanged', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('update', ev, id);
            }
            this.updateSchedulerEvents();
        });

        scheduler.attachEvent('onEventDeleted', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('delete', ev, id);
            }
            this.updateSchedulerEvents();
        });
        scheduler._$initialized = true;
    }

    updateSchedulerEvents() {
        const schedulerEvents = scheduler.getEvents();
        this.setState({ schedulerEvents });
    }

    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = ['day', 'week', 'month', 'date', 'prev', 'today', 'next'];
        scheduler.config.hour_date = '%g:%i %A';
        scheduler.xy.scale_width = 70;

        this.initSchedulerEvents();

        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2024, 2, 11));
        scheduler.clearAll();
        scheduler.parse(events);
        this.updateSchedulerEvents();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.timeFormatState !== nextProps.timeFormatState;
    }

    componentDidUpdate() {
        scheduler.render();
    }

    setHoursScaleFormat(state) {
        scheduler.config.hour_date = state ? '%H:%i' : '%g:%i %A';
        scheduler.templates.hour_scale = scheduler.date.date_to_str(scheduler.config.hour_date);
    }

    handleFormSubmit = (formData) => {
        // Here, you can handle the submission of both scheduler and form data
        console.log('Scheduler Data:', this.state.schedulerEvents[0]);
        console.log('Form Data:', formData);
    };

    render() {
        const { timeFormatState } = this.props;
        const { schedulerEvents } = this.state;
        this.setHoursScaleFormat(timeFormatState);

        return (
            <>
                <div
                    ref={(input) => {
                        this.schedulerContainer = input;
                    }}
                    style={{ width: '100%', height: '600px' }}
                ></div>
                <Sform
                    schedulerEvents={schedulerEvents}
                    onSubmit={this.handleFormSubmit}
                />
            </>
        );
    }
}

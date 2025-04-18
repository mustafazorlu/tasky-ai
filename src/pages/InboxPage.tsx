import Head from '@/components/Head';
import TopAppBar from '@/components/TopAppBar';
import React from 'react';

const InboxPage = () => {
  return (
    <div>
      <Head title='Inbox - Tasky AI'></Head>

      <TopAppBar title='Inbox' taskCount={20} />
    </div>
  );
};

export default InboxPage;
